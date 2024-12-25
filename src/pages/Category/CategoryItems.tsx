import { forwardRef } from 'react';
import { generatePath, Link } from 'react-router-dom';
import cls from './Category.module.scss';
import { CategoryType } from './Category';

interface CategoryItemsProps {
    items: CategoryType[];
    url: string;
}

export const CategoryItems = forwardRef <HTMLLIElement, CategoryItemsProps>(({ items, url }, ref) => (
    <ul className={cls.container}>
        {items?.map((category, index: number) => {
            if (items.length === index + 1) {
                return (
                    <li ref={ref} key={category.id} className={cls.item}>
                        <Link to={generatePath(url, { id: category.id.toString() })}>
                            {category.name}
                        </Link>
                    </li>
                );
            }
            return (
                <li key={category.id} className={cls.item}>
                    <Link to={generatePath(url, { id: category.id.toString() })}>
                        {category.name}
                    </Link>
                </li>
            );
        })}
    </ul>

));
CategoryItems.displayName = 'CategoryItems';
