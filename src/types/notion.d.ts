import {
  ParagraphBlockObject,
  HeadingOneBlockObject,
  HeadingTwoBlockObject,
  HeadingThreeBlockObject,
  BulletedListItemBlockObject,
  NumberedListItemBlockObject,
  TodoBlockObject,
  ToggleBlockObject,
  ChildPageBlockObject,
  ChildDatabaseBlockObject,
  EmbedBlockObject,
  ImageBlockObject,
  VideoBlockObject,
  FileBlockObject,
  PDFBlockObject,
  BookmarkBlockObject,
  CallOutBlockObject,
  LinkPreviewBlockObject,
  OriginalSyncedBlockObject,
  ReferencedSyncedBlockObject,
  TemplateBlockObject,
  LinkToPageBlockObject,
  UnsupportedBlockObject,
  QuoteBlockObject,
  EquationBlockObject,
  DividerBlockObject,
  TableOfContentsBlockObject,
  ColumnChildBlockObject,
  ColumnListBlockObject,
  ColumnValueBlockObject,
  BreadcrumbBlockObject,
  CodeBlockObject,
} from 'types/notionBaseBlock.d';
import { BlockType, ObjectType } from 'types/notionBaseType.d';

type PickOne<T> = {
  [P in keyof T]: Record<P, T[P]> &
    Partial<Record<Exclude<keyof T, P>, undefined>>;
}[keyof T];

type SyncTypeAndName = {
  paragraph: ParagraphBlockObject;
  heading_1: HeadingOneBlockObject;
  heading_2: HeadingTwoBlockObject;
  heading_3: HeadingThreeBlockObject;
  bulleted_list_item: BulletedListItemBlockObject;
  numbered_list_item: NumberedListItemBlockObject;
  to_do: TodoBlockObject;
  toggle: ToggleBlockObject;
  child_page: ChildPageBlockObject;
  child_database: ChildDatabaseBlockObject;
  embed: EmbedBlockObject;
  image: ImageBlockObject;
  video: VideoBlockObject;
  file: FileBlockObject;
  pdf: PDFBlockObject;
  bookmark: BookmarkBlockObject;
  callout: CallOutBlockObject;
  quote: QuoteBlockObject;
  equation: EquationBlockObject;
  divider: DividerBlockObject;
  table_of_contents: TableOfContentsBlockObject;
  column: ColumnListBlockObject;
  column_list: ColumnChildBlockObject;
  column_value: ColumnValueBlockObject;
  link_preview: LinkPreviewBlockObject;
  synced_block: OriginalSyncedBlockObject | ReferencedSyncedBlockObject;
  template: TemplateBlockObject;
  link_to_page: LinkToPageBlockObject;
  unsupported: UnsupportedBlockObject;
};

export type BlockObjectType =
  | ParagraphBlockObject
  | HeadingOneBlockObject
  | HeadingTwoBlockObject
  | HeadingThreeBlockObject
  | CallOutBlockObject
  | QuoteBlockObject
  | BulletedListItemBlockObject
  | NumberedListItemBlockObject
  | TodoBlockObject
  | ToggleBlockObject
  | CodeBlockObject
  | ChildPageBlockObject
  | ChildDatabaseBlockObject
  | EmbedBlockObject
  | ImageBlockObject
  | VideoBlockObject
  | FileBlockObject
  | PDFBlockObject
  | BookmarkBlockObject
  | EquationBlockObject
  | DividerBlockObject
  | TableOfContentsBlockObject
  | BreadcrumbBlockObject
  | ColumnListBlockObject
  | ColumnChildBlockObject
  | LinkPreviewBlockObject
  | LinkToPageBlockObject
  | OriginalSyncedBlockObject
  | ReferencedSyncedBlockObject
  | UnsupportedBlockObject;

export type NotionBlockObject = {
  object: ObjectType;
  id: string;
  created_time: string; // ISO 8601 date time string
  last_edited_time: string; // ISO 8601 date time string
  has_children: boolean;
  type: BlockType;
  archived: boolean;
} & PickOne<SyncTypeAndName>;
