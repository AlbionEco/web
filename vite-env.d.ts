/// <reference types="react" />

/**
 * Fix for line 2: Cannot find type definition file for 'vite/client'.
 * Providing manual shims for Vite environment variables to ensure compatibility.
 */
interface ImportMetaEnv {
  readonly [key: string]: any;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'react-dom/client' {
  import { ReactNode } from 'react';
  
  /**
   * Fix for line 5: Module '"react-dom"' has no exported member 'Root'.
   * Defined the Root interface locally as it is standard in React 18's react-dom/client package.
   */
  export interface Root {
    render(children: ReactNode): void;
    unmount(): void;
  }

  export interface CreateRootOptions {
    onRecoverableError?: (error: unknown) => void;
    identifierPrefix?: string;
  }

  export interface HydrationOptions {
    onRecoverableError?: (error: unknown) => void;
    identifierPrefix?: string;
  }

  export function createRoot(container: Element | DocumentFragment, options?: CreateRootOptions): Root;
  export function hydrateRoot(container: Element | Document, initialChildren: ReactNode, options?: HydrationOptions): Root;

  // Added default export to support 'import ReactDOM from "react-dom/client"' usage in index.tsx
  const _default: {
    createRoot: typeof createRoot;
    hydrateRoot: typeof hydrateRoot;
  };
  export default _default;
}
