import React, { Component, ReactNode } from 'react';
import St from './styled';
import categoryAsian from '../../assets/category-asian.png';
import categoryChinese from '../../assets/category-chinese.png';
import categoryJapanese from '../../assets/category-japanese.png';
import categoryKorean from '../../assets/category-korean.png';
import categoryWestern from '../../assets/category-western.png';
import categoryEtc from '../../assets/category-etc.png';

type Category = '한식' | '중식' | '일식' | '양식' | '아시안' | '기타';

interface CategoryImgProps {
  category: Category;
}

const CATEGORY_SRC: Record<Category, string> = {
  한식: categoryKorean,
  중식: categoryChinese,
  일식: categoryJapanese,
  양식: categoryWestern,
  아시안: categoryAsian,
  기타: categoryEtc,
};

class CategoryImg extends Component<CategoryImgProps> {
  constructor(props: CategoryImgProps) {
    super(props);
  }
  render(): ReactNode {
    const { category } = this.props;
    return <St.CategoryImg src={CATEGORY_SRC[category]} alt={category} />;
  }
}

export default CategoryImg;
