import * as ToolBelt from 'ts-toolbelt'

declare global {
  namespace TB {
    export import Number = ToolBelt.Number
    export import String = ToolBelt.String
    export import Object = ToolBelt.Object
    export import List = ToolBelt.List
    export import Union = ToolBelt.Union
    export import Function = ToolBelt.Function
    export import Any = ToolBelt.Any
    export import Boolean = ToolBelt.Boolean
  }
}

export {}
