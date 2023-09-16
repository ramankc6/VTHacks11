import * as THREE from 'three';
import { Tool, ToolName } from '../tools';
import { circleBrush, circleEraser } from '../tools/draw';

const kTools: ToolName[] = ['Circle Brush', 'Circle Eraser' ];

const kToolBuilders: { [key in ToolName]: () => Tool<key> } = {
  'Circle Brush': () => circleBrush(20.0, new THREE.Color(0xffffff), 1.0),
  'Circle Eraser': () => circleEraser(20.0, 1.0),
};

export function TexturePainterToolbar(props: {
  currentToolName: ToolName;
  updateTool: (tool: Tool) => void;
}): JSX.Element {
  return (
    <div className="texture-painter-toolbar">
      {kTools.map(toolName => {
        return (
          <button key={toolName} onClick={() => props.updateTool(kToolBuilders[toolName]())}>
            {toolName}
          </button>
        );
      })}
    </div>
  );
}
