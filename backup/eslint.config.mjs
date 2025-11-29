import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // TypeScript 相关规则
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/prefer-as-const": "warn",
      
      // React 相关规则
      "react-hooks/exhaustive-deps": "warn",
      "react/no-unescaped-entities": "warn",
      "react/display-name": "warn",
      "react/prop-types": "off", // TypeScript 项目不需要 prop-types
      
      // Next.js 相关规则
      "@next/next/no-img-element": "warn", // 建议使用 next/image
      "@next/next/no-html-link-for-pages": "warn", // 建议使用 Link 组件
      
      // 一般JavaScript规则
      "prefer-const": "warn",
      "no-unused-vars": "warn",
      "no-console": "warn",
      "no-debugger": "error",
      "no-empty": "warn",
      "no-irregular-whitespace": "error",
      "no-case-declarations": "warn",
      "no-fallthrough": "warn",
      "no-mixed-spaces-and-tabs": "error",
      "no-redeclare": "warn",
      "no-undef": "off", // TypeScript 会处理未定义变量
      "no-unreachable": "warn",
      "no-useless-escape": "warn",
    },
  },
];

export default eslintConfig;
