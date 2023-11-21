// @ts-ignore: Unreachable code error
import quillEmoji from "quill-emoji";
import { Quill } from "react-quill";

export const modules = {
  toolbar: [
    ["clean"],
    [{ color: [] }],
    ["bold"],
    ["italic"],
    ["underline"],
    [{ list: "ordered" }],
    [{ list: "bullet" }],
    ["image"],
    ["link"],
    ["emoji"],
  ],
};

export const formats = [
  "bolid",
  "italic",
  "underline",
  "list",
  "list",
  "ordered",
  "bullet",
  "link",
  "image",
  "emoji",
];

export const quill = Quill.register(
  {
    "formats/emoji": quillEmoji.EmojiBlot,
    "modules/emoji-toolbar": quillEmoji.ToolbarEmoji,
    "modules/emoji-textarea": quillEmoji.TextAreaEmoji,
    "modules/emoji-shortname": quillEmoji.ShortNameEmoji,
  },
  true
);
