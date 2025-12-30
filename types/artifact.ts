// TypeScript interfaces for artifact functionality

export interface Artifact {
  _id: string;
  type: 'html' | 'code' | 'svg' | 'markdown' | 'react' | 'vue' | 'json' | 'csv' | 'mermaid' | 'document' | 'presentation';
  title: string;
  language?: string;
  content: string;
  version: number;
  messageId: string;
  parentArtifactId?: string;
  metadata?: string;
  conversationId?: string;
  createdAt?: string;
}

export interface ArtifactMeta {
  title: string;
  type: string;
  language?: string;
}

export interface StreamingArtifact extends Artifact {
  isStreaming?: boolean;
}

