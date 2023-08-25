import {type ElementType} from 'react'

export interface IConditionallyRenderProps {
  condition: boolean;
  show:  ElementType | RenderFunc;
  elseShow?: ElementType | RenderFunc;
}

export type RenderFunc = () => ElementType;
