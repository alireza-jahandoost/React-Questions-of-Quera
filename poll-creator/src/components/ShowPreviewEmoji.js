import { ShowEmoji } from "./ShowEmoji";

export const ShowPreviewEmoji = ({ emojis }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {emojis.map((e) =>
        e.isSelected ? (
          <div key={e.title}>
            <ShowEmoji src={e.src} viewStyle="preview" name={e.title} />
            <div style={{ textAlign: "center" }}>{e.description}</div>
          </div>
        ) : null
      )}
    </div>
  );
};
