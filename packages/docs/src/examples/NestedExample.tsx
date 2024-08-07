import { PanelGroup, Panel, PanelResizer } from "react-window-splitter";

function NestedExample() {
  return (
    <PanelGroup
      orientation="horizontal"
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        borderRadius: 12,
        height: 400,
      }}
    >
      <Panel min="10%">left</Panel>
      <PanelResizer />
      <Panel min="10%">
        <PanelGroup orientation="vertical">
          <Panel min="10%">top</Panel>
          <PanelResizer />
          <Panel min="10%">
            <PanelGroup orientation="horizontal">
              <Panel min="20%">left</Panel>
              <PanelResizer />
              <Panel min="20%">right</Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </Panel>
      <PanelResizer />
      <Panel min="10%">right</Panel>
    </PanelGroup>
  );
}
