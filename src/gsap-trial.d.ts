declare module "gsap-trial/SplitText" {
  export class SplitText {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(target: any, vars?: Record<string, unknown>);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
    split(vars?: Record<string, unknown>): void;
  }
}
