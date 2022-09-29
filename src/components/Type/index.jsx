import { Text, Types } from "../../styles"

export const Type = ({ type1, type2 }) => {
  return (
    <>
      {(!!type2 && (
        <Types>
          <Text type={type1}>{type1}</Text>
          <Text type={type2}>{type2}</Text>
        </Types>
      )) || <Text type={type1}>{type1}</Text>}
    </>
  )
}
