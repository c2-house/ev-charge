import Image from 'next/image';
import { Divider, Heading, List, Text, useTheme } from '@chakra-ui/react';

import { convertToSlug } from '@/utils/blog';
import TableOfContents from '../TableOfContents';
import PostListItem from '../PostListItem';

const Lanzador = ({ slug }: { slug: string }) => {
  const theme = useTheme();
  const imgDir = `/images/blog/${slug}`;
  const titles = [
    '람보르기니 란자도르 EV',
    '람보르기니 란자도르 성능',
    '람보르기니 란자도르 디자인',
    '란자도르 가격, 출시일',
  ];

  return (
    <>
      <TableOfContents titles={titles} />

      <Text my={5}>
        슈퍼카의 대명사 람보르기니가 최초의 전기차 출시를 앞두고 있어서 자동차 매니아들의 관심을
        모으고 있습니다. 이름은 &apos;란자도르&apos; EV 입니다.
      </Text>

      <Heading id={convertToSlug(titles[0])} as='h3' size='lg' pt={theme.sizes.navHeight} mb={5}>
        {titles[0]}
      </Heading>
      <Image
        src={`${imgDir}/01.jpg`}
        alt='란자도르'
        width={1200}
        height={630}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <Text my={5}>
        4인승 스포츠 SUV 구조를 지닌 란자도르는 우루스와 닮은 외관 디자인을 선보이고 있습니다.
        따라서 람보르기니의 전통적인 이미지를 고수하면서 미래 지향적인 컨셉도 추구하고 있습니다.
      </Text>
      <Image
        src={`${imgDir}/02.jpg`}
        alt='란자도르'
        width={1200}
        height={630}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />

      <Heading id={convertToSlug(titles[1])} as='h3' size='lg' pt={theme.sizes.navHeight} mb={5}>
        {titles[1]}
      </Heading>
      <Text my={5}>
        황소의 이미지와 더불어 전기차의 미래지향적 디자인을 합하여 마치 우주선을 연상시키는
        람보르기니 EV 모델인데요. 디자인뿐만 아니라, 엄청난 고스펙을 자랑합니다.
      </Text>
      <Text my={5}>
        람보르기니 란자도르 EV는 전륜, 후륜에 2개의 고출력 전기 모터를 장착하여 1MW, 마력으로
        변환하면 1,340 마력의 엄청난 퍼포먼스를 자랑하게 됩니다. 제로백은 2초대 초반으로 폭발력을
        선보일 것으로 보입니다.
      </Text>
      <Image
        src={`${imgDir}/03.jpg`}
        alt='란자도르'
        width={1200}
        height={630}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <Text my={5}>
        고성능 전기차의 개선점 중 하나는 바로 주행거리 입니다. 하지만 이번 란자도르 ev는 장거리
        주행이 가능한 최신식 고성능 배터리팩을 장착하여 선보이게 될 예정인데요. 아직 구체적인
        주행거리는 공개되지 않았지만, 기존의 슈퍼전기차 타이칸과 비교했을 때, 더욱 뛰어난 주행
        성능을 선보일 것으로 기대되고 있습니다.
      </Text>
      <Image
        src={`${imgDir}/04.jpg`}
        alt='란자도르'
        width={1200}
        height={630}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <Text my={5}>
        혁신적인 성능과 더불어 디자인 측면에서도 이전과 다른 모습을 보여줄 것으로 보이는데요.
        람보르기니 특유의 황소 이미지를 연상시키는데요.
      </Text>
      <Image
        src={`${imgDir}/06.jpg`}
        alt='란자도르'
        width={1200}
        height={630}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <Text my={5}>
        기존의 우루스보다 좀 더 낮은 높이 포지션을 택하여 스피디함을 살렸고, 후면부 테일램프는 마치
        페라리 로마(?)와 같은 느낌을 주네요.
      </Text>
      <Image
        src={`${imgDir}/07.jpg`}
        alt='란자도르'
        width={1200}
        height={630}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <br />
      <Image
        src={`${imgDir}/08.jpg`}
        alt='란자도르'
        width={1200}
        height={630}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />

      <Heading id={convertToSlug(titles[2])} as='h3' size='lg' pt={theme.sizes.navHeight} mb={5}>
        {titles[2]}
      </Heading>
      <Text my={5}>
        우루스에서 선보였던 것처럼 실내 디자인 또한 최첨단으로 구성되는데요. 람보르기니 란자도르
        운전석은 마치 전투기 및 우주선 조종석과 같은 느낌을 연상시키며, 주행의 재미를 더해줄 것으로
        보입니다.
      </Text>
      <Text my={5}>
        또한, 슈퍼카의 단점 중 하나인 편의성을 해결하고자 최첨단 인포테인먼트를 장착하여, 주행중에도
        편리하게 조작할 수 있는 시스템을 구축할 것으로 보입니다.
      </Text>
      <Image
        src={`${imgDir}/10.jpg`}
        alt='란자도르'
        width={1200}
        height={630}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <br />
      <Image
        src={`${imgDir}/11.jpg`}
        alt='란자도르'
        width={1200}
        height={630}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />

      <Heading id={convertToSlug(titles[3])} as='h3' size='lg' pt={theme.sizes.navHeight} mb={5}>
        {titles[3]}
      </Heading>
      <Text my={5}>
        란자도르 ev는 2028년 부터 본격적으로 양산에 돌입하게 됩니다. 그전까지 기존 모델들인 우라칸과
        우르스의 하이브리드 모델을 선보이면서 전동화 모델에 대한 고급화 시도를 점차적으로 할
        예정이라고 하는데요.
      </Text>
      <Text my={5}>
        람보르기니 첫 전기차인 란자도르 ev는 아직 가격은 오픈되어있지 않지만 대략적으로 4억원
        이상부터 출고가 시작이지 않을까 예상이 됩니다.
      </Text>

      <Divider my={6} />
      <Text mb={5} fontSize='xl' fontWeight='bold'>
        관련 글 더 보기
      </Text>
      <List>
        <PostListItem
          title='2023 자동차(전기차,수소차,하이브리드) 취득세 핵심 정보'
          slug='green-car-acquisition-tax'
          imgSrc='/images/blog/green-car-acquisition-tax/01.jpg'
          imgAlt='전기차 취득세'
        />
        <PostListItem
          title='2023 전기차 보조금, 신청방법 핵심정보 요약'
          slug='electric-car-subsidy'
          imgSrc='/images/blog/electric-car-subsidy/01.jpg'
          imgAlt='전기차 보조금'
        />
        <PostListItem
          title={`전기차 충전소 찾기, 실시간 조회 서비스 '전기차G'`}
          slug='ev-charge-introduction'
          imgSrc='/og.png'
          imgAlt='전기차G'
        />
      </List>
    </>
  );
};

export default Lanzador;