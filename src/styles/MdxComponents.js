import React from 'react';
import { Styled } from 'theme-ui';

export const Heading1 = (props) => <Styled.h1 {...props} />;
export const Heading2 = (props) => <Styled.h2 {...props} />;
export const Heading3 = (props) => <Styled.h3 {...props} />;
export const Heading4 = (props) => <Styled.h4 {...props} />;
export const Heading5 = (props) => <Styled.h5 {...props} />;
export const Heading6 = (props) => <Styled.h6 {...props} />;
export const Paragraph = (props) => <Styled.p {...props} />;
export const ThematicBreak = (props) => <Styled.thematicBreak {...props} />;
export const blockquote = (props) => <Styled.blockquote {...props} />;
export const List = (props) => <Styled.ul {...props} />;
export const OrderedList = (props) => <Styled.ol {...props} />;
export const ListItem = (props) => <Styled.li {...props} />;
export const Table = (props) => <Styled.table {...props} />;
export const TableHead = (props) => <Styled.thead {...props} />;
export const TableBody = (props) => <Styled.tbody {...props} />;
export const TableRow = (props) => <Styled.tr {...props} />;
export const TableCell = (props) => <Styled.td {...props} />;
export const PreFormatted = (props) => <Styled.pre {...props} />;
export const Code = (props) => <Styled.code {...props} />;
export const Emphasis = (props) => <Styled.em {...props} />;
export const Strong = (props) => <Styled.strong {...props} />;
export const Delete = (props) => <Styled.del {...props} />;
export const InlineCode = (props) => <Styled.inlineCode {...props} />;
export const Break = (props) => <Styled.hr {...props} />;
export const Link = (props) => <Styled.a {...props} />;
export const Image = (props) => <Styled.img {...props} />;

export const components = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  p: Paragraph,
  thematicBreak: ThematicBreak,
  blockquote: blockquote,
  ul: List,
  ol: OrderedList,
  li: ListItem,
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  tr: TableRow,
  td: TableCell,
  pre: PreFormatted,
  code: Code,
  em: Emphasis,
  strong: Strong,
  del: Delete,
  inlineCode: InlineCode,
  hr: Break,
  a: Link,
  img: Image,
};
