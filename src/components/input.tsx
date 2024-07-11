import clsx from "clsx";
import { TextInput, TextInputProps, View, Platform } from "react-native";

import { colors } from "@/styles/colors";

type Variants = "primary" | "secondary" | "tertiary"

type InputProps = {
  children: React.ReactNode
  variant?: Variants
}

function Input({ children, variant = "primary" }: InputProps) {
  return (
  <View className={clsx(
    //classes comuns a todas as variaçoes
    "w-full h-16 flex-row items-center gap-2",
    //{"": variant !== "primary"},
    {"h-14 px-4 rounded-lg border border-zinc-800": variant !== "primary",
    //{"": variant === "secondary"},
    "bg-zinc-950": variant === "secondary",
    //"": variant === "tertiary"},
    "bg-zinc-900": variant === "tertiary"},

    )}>{children}
  </View>)
}

function Field({ ...rest }: TextInputProps) {
  return(
    <TextInput 
      className="flex-1 text-lg text-zinc-100 font-regular" 
      placeholderTextColor={colors.zinc[400]}
      cursorColor={colors.zinc[100]}
      //propriedade para IOS - importar o Platform e..
      selectionColor={Platform.OS === "ios" ? colors.zinc[100] : undefined}
      {...rest}
    />
  )
}

Input.Field = Field;

export { Input }