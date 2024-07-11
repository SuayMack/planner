import { createContext, useContext } from 'react';

import { ActivityIndicator, Text, TextProps, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import clsx from "clsx";

type Variants = "primary" | "secondary";

type ButtonProps = TouchableOpacityProps & {
  variant?: Variants;
  isLoading?: boolean;
};

const ThemeContext = createContext<{ variants?: Variants }>({});

function Button({ variant = "primary", children,isLoading, ...rest }: ButtonProps) {

  return (
    <TouchableOpacity activeOpacity={0.7} disabled={isLoading} {...rest}>
      <View className={clsx(
        'w-full h-11 flex-row justify-center items-center rounded-lg gap-2',
        {
          "bg-lime-300": variant === "primary",
          "bg-zinc-800": variant === "secondary",
        }
        )}
      >
        <ThemeContext.Provider value={{ variants : variant }}>
        {isLoading ? <ActivityIndicator className="text-lime-950" /> : children}
      </ThemeContext.Provider>
      </View>      
    </TouchableOpacity>
  )
}

function Title({ children }: TextProps) {

  const { variants : variant } = useContext(ThemeContext)

  return (
    <Text
      className={clsx("text-base font-semibold", {
        "text-lime-950": variant === "primary",
        "text-zinc-200": variant === "secondary",
      })}
    >
      { children }
    </Text>
  )
}

Button.Title = Title;

export { Button }