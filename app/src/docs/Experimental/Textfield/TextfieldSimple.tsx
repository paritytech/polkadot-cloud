/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Textfield } from "@packages/cloud-react/lib/textfield/Textfield";
import { SimpleEditor } from "@docs/SimpleEditor";
import { useState } from "react";

import { faUser, faCopy } from "@fortawesome/free-solid-svg-icons";

export const TextfieldSimple = () => {
  const code = `const [value, setValue] = useState<string>("");
...  
<Textfield value={text} onChange={(text) => setValue(text)} />`;

  const code_more = `import { faUser } from "@fortawesome/free-solid-svg-icons";
...
const [value, setValue] = useState<string>("");
...  
<Textfield
  iconLeft={{ icon: faUser, }}
  placeholder="Placeholder's text"
  value={value}
  onChange={(val) => setValueB(val)}
/>`;

  const code_much_more = `import { faUser, faCopy } from "@fortawesome/free-solid-svg-icons";
...
const [value, setValue] = useState<string>("");
...  
<Textfield
  iconLeft={{ icon: faUser, }}
  iconRight={{ icon: faCopy, action: () => console.log("copy") }}
  placeholder="Placeholder's text"
  value={value}
  onChange={(val) => setValueB(val)}
/>`;

  const [valueA, setValueA] = useState<string>("");
  const [valueB, setValueB] = useState<string>("");
  const [valueC, setValueC] = useState<string>("");

  return (
    <>
      <div className="demo">
        <Textfield key="A" value={valueA} onChange={(val) => setValueA(val)} />
      </div>
      <SimpleEditor code={code} />
      <div className="demo">
        <Textfield
          key="B"
          iconLeft={{
            icon: faUser,
          }}
          placeholder="Placeholder's text"
          value={valueB}
          onChange={(a) => setValueB(a)}
        />
      </div>
      <SimpleEditor code={code_more} />
      <div className="demo">
        <Textfield
          key="C"
          iconLeft={{
            icon: faUser,
          }}
          iconRight={{
            icon: faCopy,
            action: () => console.log("copy"),
          }}
          placeholder="Placeholder's text"
          value={valueC}
          onChange={(a) => setValueC(a)}
        />
      </div>
      <SimpleEditor code={code_much_more} />
    </>
  );
};
