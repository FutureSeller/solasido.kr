import { Box, Text } from '@chakra-ui/react'

export default function SearchSection() {
  return (
    <Box padding="120px 100px" background="#eBe8e1">
      <Text as="h2" fontFamily="SUIT Bold" fontSize="40px" marginBottom="66px">
        맛집찾기
      </Text>
      <Text>
        메인 화면에서는 오늘의 메뉴를 추천하고, 사용자의 위치 기반으로 맛집 정보를 보여줍니다. 테마별로 보고 싶은 맛집을
        설정할 수 있습니다.
      </Text>
    </Box>
  )
}
