import { ShowEmoji } from "./ShowEmoji";
import { useEffect, useState } from "react";

export const DescriptionItem = ({ emojis, setEmojis }) => {
  const [prevEmojis, setPrevEmojis] = useState(emojis);
  useEffect(() => {
    for (const e of emojis) {
      console.log(
        e,
        prevEmojis.find((prev) => prev.title === e.title)
      );
      if (
        e.isSelected === false &&
        prevEmojis.find((prev) => prev.title === e.title).isSelected === true
      ) {
        if (e.description !== "") {
          setEmojis([
            ...emojis.map((currentEmoji) =>
              currentEmoji.title === e.title
                ? { ...currentEmoji, description: "" }
                : currentEmoji
            ),
          ]);
        }
      }
    }
    let hasChange = false;
    for (const e of emojis) {
      const x = prevEmojis.find((prev) => prev.title === e.title);
      if (x.isSelected !== e.isSelected || x.description !== e.description) {
        hasChange = true;
      }
    }
    if (hasChange) {
      setPrevEmojis(emojis);
    }
  }, [emojis, prevEmojis, setEmojis]);
  return (
    <div>
      {emojis.map((e) =>
        !e.isSelected ? null : (
          <div key={e.title}>
            <label htmlFor={e.title}>
              Description for
              <ShowEmoji src={e.src} name={e.title} viewStyle="description" />:
            </label>
            <input
              id={e.title}
              value={e.description}
              onChange={(event) =>
                setEmojis([
                  ...emojis.map((currentEmoji) =>
                    currentEmoji.title === e.title
                      ? { ...currentEmoji, description: event.target.value }
                      : currentEmoji
                  ),
                ])
              }
            />
          </div>
        )
      )}
    </div>
  );
};
