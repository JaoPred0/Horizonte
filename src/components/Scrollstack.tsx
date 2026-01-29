import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem = ({ children, itemClassName = '' }: ScrollStackItemProps) => (
  <div
    className={`scroll-stack-card relative w-full h-80 my-8 p-12 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top ${itemClassName}`.trim()}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

interface CardState {
  translateY: number;
  scale: number;
  rotation: number;
  blur: number;
}

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}: ScrollStackProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const cardStatesRef = useRef<CardState[]>([]);

  const parsePercentage = (value: string | number, containerHeight: number): number => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value.toString());
  };

  const lerp = (start: number, end: number, factor: number): number => {
    return start + (end - start) * factor;
  };

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const scrollTop = useWindowScroll ? window.scrollY : scrollerRef.current?.scrollTop || 0;
    const containerHeight = useWindowScroll ? window.innerHeight : scrollerRef.current?.clientHeight || 0;
    
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end');

    const endElementTop = endElement 
      ? (useWindowScroll ? endElement.getBoundingClientRect().top + window.scrollY : (endElement as HTMLElement).offsetTop)
      : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = useWindowScroll 
        ? card.getBoundingClientRect().top + window.scrollY 
        : card.offsetTop;

      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      // Calcular progresso
      let scaleProgress = 0;
      if (scrollTop < triggerStart) scaleProgress = 0;
      else if (scrollTop > triggerEnd) scaleProgress = 1;
      else scaleProgress = (scrollTop - triggerStart) / (triggerEnd - triggerStart);

      // Valores target
      const targetScale = baseScale + i * itemScale;
      const targetScaleValue = 1 - scaleProgress * (1 - targetScale);
      const targetRotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let targetBlur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCard = cardsRef.current[j];
          if (!jCard) continue;
          const jCardTop = useWindowScroll 
            ? jCard.getBoundingClientRect().top + window.scrollY 
            : jCard.offsetTop;
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }
        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          targetBlur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let targetTranslateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        targetTranslateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        targetTranslateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      // Inicializar estado se não existir
      if (!cardStatesRef.current[i]) {
        cardStatesRef.current[i] = {
          translateY: targetTranslateY,
          scale: targetScaleValue,
          rotation: targetRotation,
          blur: targetBlur
        };
      }

      // Interpolação suave (LERP) - quanto menor o valor, mais suave
      const lerpFactor = 0.15;
      
      cardStatesRef.current[i].translateY = lerp(cardStatesRef.current[i].translateY, targetTranslateY, lerpFactor);
      cardStatesRef.current[i].scale = lerp(cardStatesRef.current[i].scale, targetScaleValue, lerpFactor);
      cardStatesRef.current[i].rotation = lerp(cardStatesRef.current[i].rotation, targetRotation, lerpFactor);
      cardStatesRef.current[i].blur = lerp(cardStatesRef.current[i].blur, targetBlur, lerpFactor);

      // Aplicar transformações
      const currentState = cardStatesRef.current[i];
      const transform = `translate3d(0, ${currentState.translateY.toFixed(2)}px, 0) scale(${currentState.scale.toFixed(4)}) rotate(${currentState.rotation.toFixed(2)}deg)`;
      const filter = currentState.blur > 0.01 ? `blur(${currentState.blur.toFixed(2)}px)` : 'none';

      card.style.transform = transform;
      card.style.filter = filter;

      // Stack complete callback
      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete
  ]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    
    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll<HTMLElement>('.scroll-stack-card')
        : scroller?.querySelectorAll<HTMLElement>('.scroll-stack-card') || []
    );

    if (!cards.length) return;

    cardsRef.current = cards;
    cardStatesRef.current = [];

    // Estilos iniciais otimizados
    cards.forEach((card: HTMLElement, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translate3d(0, 0, 0)';
    });

    // Setup Lenis
    let lenis: Lenis | undefined;
    
    if (useWindowScroll) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        lerp: 0.1
      });
    } else if (scroller) {
      const content = scroller.querySelector('.scroll-stack-inner');
      lenis = new Lenis({
        wrapper: scroller,
        content: content as HTMLElement,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        lerp: 0.1
      });
    }

    lenisRef.current = lenis || null;

    // Loop de animação unificado
    function raf(time: number) {
      lenis?.raf(time);
      updateCardTransforms();
      requestAnimationFrame(raf);
    }
    
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      stackCompletedRef.current = false;
      cardsRef.current = [];
      cardStatesRef.current = [];
    };
  }, [itemDistance, useWindowScroll, updateCardTransforms]);

  const containerClassName = useWindowScroll
    ? `relative w-full ${className}`.trim()
    : `relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim();

  return (
    <div className={containerClassName} ref={scrollerRef}>
      <div className="scroll-stack-inner pt-[20vh] px-4 sm:px-8 md:px-20 pb-[50rem] min-h-screen">
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;