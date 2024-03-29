import { useRouter } from 'next/router';
import { ChangeEventHandler, useState } from 'react';
import { Flex, Select } from '@chakra-ui/react';

import { SortOption } from '@/types/usedCars';
import { generateDateStrings } from '@/utils/usedCars';

interface Props {
  sortOption: string;
  handleSortOptionChange: ChangeEventHandler<HTMLSelectElement>;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'name', label: '가나다순' },
  { value: 'minPrice', label: '최저가 낮은 순' },
  { value: 'maxPrice', label: '최고가 높은 순' },
];

const Options = ({ sortOption, handleSortOptionChange }: Props) => {
  const router = useRouter();
  const [month, setMonth] = useState(router.query.month as string);
  const allMonths = generateDateStrings().reverse();

  const handleMonthChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { value } = e.target;
    setMonth(value);
    router.push(`/used-cars/${value}`, undefined, { scroll: false });
  };

  const convertDateFormat = (date: string) => {
    const [year, month] = date.split('-');
    return `${year}년 ${parseInt(month)}월`;
  };

  return (
    <Flex gap={4} mb={4}>
      <Select value={month} onChange={handleMonthChange}>
        {allMonths.map((month) => (
          <option key={month} value={month}>
            {convertDateFormat(month)}
          </option>
        ))}
      </Select>

      <Select value={sortOption} onChange={handleSortOptionChange}>
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default Options;
