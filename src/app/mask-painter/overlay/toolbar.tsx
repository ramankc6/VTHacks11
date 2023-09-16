import * as THREE from 'three';
import { Tool, ToolName } from '../tools';
import { circleBrush, circleEraser } from '../tools/draw';
import { useState } from 'react';

const kTools: ToolName[] = ['Circle Brush', 'Circle Eraser' ];

const kToolBuilders: { [key in ToolName]: () => Tool<key> } = {
  'Circle Brush': () => circleBrush(20.0, new THREE.Color(0xffffff), 1.0),
  'Circle Eraser': () => circleEraser(20.0, 1.0),
};

const kToolIcons: { [key in ToolName]: string } = {
  'Circle Brush': '/paintbrush.png',
  'Circle Eraser': '/eraser.png'
}

export function TexturePainterToolbar(props: {
  currentToolName: ToolName;
  updateTool: (tool: Tool) => void;
}): JSX.Element {
  const [curTool, setCurTool] = useState(props.currentToolName);

  return (
    <div className="texture-painter-toolbar">
      {kTools.map(toolName => {
        return (
          <button 
            className={`transition text-sm border-slate-600 border-3 m-1 opacity-75 ${curTool === toolName ? "bg-pink-300" : "bg-slate-100"} p-1 rounded`}
            key={toolName} 
            onClick={() => {
              setCurTool(toolName);
              props.updateTool(kToolBuilders[toolName]())
            }}>
            <img src={kToolIcons[toolName]} className="w-6" />
          </button>
        );
      })}
    </div>
  );
}
