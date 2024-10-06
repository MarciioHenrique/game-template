export type NestedKeyOf<ObjectType> = ObjectType extends unknown[]
  ? `${number}` | `${number}.${NestedKeyOf<ObjectType[number]>}`
  : {
      [Key in keyof ObjectType & (string | number)]: NonNullable<
        ObjectType[Key]
      > extends object
        ? NonNullable<ObjectType[Key]> extends Array<unknown>
          ?
              | `${Key}`
              | `${Key}.${number}`
              | (NonNullable<ObjectType[Key]>[number] extends object
                  ? `${Key}.${number}.${NestedKeyOf<
                      NonNullable<ObjectType[Key]>[number]
                    >}`
                  : "")
          : `${Key}` | `${Key}.${NestedKeyOf<NonNullable<ObjectType[Key]>>}`
        : `${Key}`;
    }[keyof ObjectType & (string | number)];

export type NestedValueOf<T, K extends NestedKeyOf<T>> = InternalValueOf<T, K>;
type GetKey<T, K> = K extends keyof T ? K : never;
type InternalValueOf<T, K> = K extends `${infer firstIndex}.${infer restIndex}`
  ? firstIndex extends keyof T | `${number}`
    ? restIndex extends NestedKeyOf<T[GetKey<T, firstIndex>]>
      ? InternalValueOf<T[GetKey<T, firstIndex>], restIndex>
      : never
    : never
  : K extends keyof T | `${number}`
  ? T[GetKey<T, K>]
  : never;
