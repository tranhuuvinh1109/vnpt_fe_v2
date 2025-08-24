import { useCallback, useMemo, useState } from "react";

const useToggleModal = (defaultValue = false): [state: boolean, setState: { on: () => void; off: () => void }] => {
  const [state, setState] = useState(defaultValue);

  const on = useCallback(() => setState(true), []);
  const off = useCallback(() => setState(false), []);

  const modalHandler = useMemo(() => ({ on, off }), [on, off]);

  return [state, modalHandler];
};

export default useToggleModal;
