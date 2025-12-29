// TypeScript interfaces for chat functionality

export interface Message {
  messageId: string;
  conversationId: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  parentMessageId?: string;
  artifactId?: string;
  sources?: string | Source[];
  createdAt: Date | string;
  updatedAt?: Date | string;
}

export interface Source {
  title: string;
  url: string;
  snippet: string;
}

export interface Conversation {
  _id: string;
  userId: string;
  title: string;
  messages: Message[];
  messageCount: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  lastMessageAt: Date | string;
}

export interface ConversationTree {
  assistantBranches: Record<string, string[]>; // userMessageId -> assistant messageIds
  userBranches: Record<string, string[]>; // parent assistantId (or root) -> user messageIds
  branchCounts: Record<string, number>; // parentId -> number of branches
  visibleMessageIds: Set<string>; // messageIds that should be displayed
}

export interface ModelSwitchNotification {
  visible: boolean;
  message: string;
}

export interface TierConfig {
  _id: string;
  tierName: string;
  displayName: string;
  deepResearch?: {
    hasDeepResearch: boolean;
    deepResearchLimit: number;
    deepResearchMaxSources: number;
  };
  designs?: {
    hasDesigns: boolean;
    designsLimit: number;
    aiImageGenerationsLimit: number;
    canUseQwen: boolean;
    canUseImagen: boolean;
    canExportPNG: boolean;
    canExportJPG: boolean;
    canExportPDF: boolean;
  };
  presentations?: {
    hasPresentations: boolean;
    presentationsLimit: number;
    maxSlidesPerPresentation: number;
    canExportPPTX: boolean;
    canExportPDF: boolean;
  };
  features?: {
    hasRAG: boolean;
    hasProjects: boolean;
    hasProReplies: boolean;
    hasVision: boolean;
  };
}

export interface User {
  _id: string;
  email: string;
  name: string;
  username: string;
  profilePicture?: string;
  tier: string;
  tokenUsage: { total: number; thisMonth: number };
  messageCount: number;
  proRepliesCount: { total: number; daily: number };
  referralCode: string;
  customInstructions?: { aboutYou?: string; responseStyle?: string };
  settings: any;
  lastModelUsed?: string;
  preferredModelId?: string;
  tierConfig?: TierConfig | null;
  createdAt: string;
  newChatDraft?: string;
}

export interface Model {
  _id: string;
  rowKey: string;
  name: string;
  modelId: string;
  provider: string;
  isActive: boolean;
  isThinking?: boolean;
  tierAccess: string[];
}

export interface Project {
  _id: string;
  name: string;
  description?: string;
  userId: string;
  conversations: string[];
  createdAt: Date | string;
}

