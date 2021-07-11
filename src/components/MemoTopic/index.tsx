import React, {
  useCallback,
  useMemo,
  useEffect,
  memo,
  useState,
  MouseEventHandler,
} from 'react';

interface FooType {
  bar?: unknown;
  baz?: unknown;
}

interface BlubType {}

interface CounterButtonType {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  count?: number;
}

interface DualCounterType {}

const Foo: React.FC<FooType> = ({ bar, baz }) => {
  const buzz = (option: unknown): void => {
    console.log(option);
  };

  useEffect(() => {
    const options = { bar, baz };
    buzz(options);
  }, [bar, baz]);

  return <div>foobar</div>;
};

const Blub: React.FC<BlubType> = () => {
  const bar = useCallback(() => {
    console.log('do something');
  }, []);

  const baz = useMemo(() => [1, 2, 3], []);

  return <Foo bar={bar} baz={baz} />;
};

const CountButton: React.FC<CounterButtonType> = memo(({ onClick, count }) => (
  <button type="button" onClick={onClick}>
    {count}
  </button>
));

const DualCounter: React.FC<DualCounterType> = () => {
  const [count1, setCount1] = useState(0);
  const increment1 = useCallback(() => setCount1((c) => c + 1), []);
  const [count2, setCount2] = useState(0);
  const increment2 = useCallback(() => setCount2((c) => c + 1), []);
  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  );
};

export { Blub, DualCounter };

/**
 
// https://kentcdodds.com/blog/usememo-and-usecallback
// https://epicreact.dev/memoization-and-react/


  Memo: 
    dùng cho component kiểm tra props truyền xuống
    có cần thay đổi ko mới re-render

  useMemo:
    trả về 1 value
    prop/state liên quan đến value nằm trong dependencies


  useCallback:
    trả về 1 func
    nếu mà param của func trong dependencies khác lần trước
    => không thực hiện tính toán func
    prop/state liên quan dến func đều nằm trong dependencies

 */
