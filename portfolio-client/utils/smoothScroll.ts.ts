export const smoothScrollTo = (id: string, offset = 80) => {
  const target = document.getElementById(id);
  if (!target) return;

  const start = window.scrollY;
  const end =
    target.getBoundingClientRect().top + window.scrollY - offset;

  const duration = 1200;
  let startTime: number | null = null;

  const easeInOutCubic = (t: number) =>
    t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animateScroll = (currentTime: number) => {
    if (!startTime) startTime = currentTime;

    const time = currentTime - startTime;
    const progress = Math.min(time / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, start + (end - start) * eased);

    if (time < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};