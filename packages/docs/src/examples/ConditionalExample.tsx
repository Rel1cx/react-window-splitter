import { useState } from "react";
import { Panel, PanelGroup, PanelResizer } from "react-window-splitter";

export function ConditionalExample() {
  const [isThirdPanelRendered, setIsThirdPanelRendered] = useState(false);

  const togglePanel = () => setIsThirdPanelRendered(!isThirdPanelRendered);
  const closePanel = () => setIsThirdPanelRendered(false);

  return (
    <>
      <button onClick={togglePanel}>
        {isThirdPanelRendered ? "Hide" : "Show"} extra panel
      </button>

      <PanelGroup>
        <Panel id="panel-1" min="100px">
          1
        </Panel>
        <PanelResizer id="resizer-1" />
        <Panel id="panel-2" min="100px">
          2
        </Panel>
        {isThirdPanelRendered && (
          <>
            <PanelResizer id="resizer-2" />
            <Panel id="panel-3" min="100px">
              <button onClick={closePanel}>close</button>
            </Panel>
          </>
        )}
      </PanelGroup>
    </>
  );
}
