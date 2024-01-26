declare global {
  interface Window {
    createLemonSqueezy: () => void;
  }

  namespace LemonSqueezy {
    namespace Url {
      function Open(url: string): void;
    }
  }
}

export {};