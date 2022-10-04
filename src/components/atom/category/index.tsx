import Category from "@/interfaces/category";
import { Tooltip } from "antd";
import { memo } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  category: Category;
}

const CategoryComponent: React.FC<Props> = ({ category }) => {
  return (
    <div
      className="flex flex-col items-center border-2 border-indigo-300 min-w-[120px] snap-center
      justify-center bg-white w-32 py-5 px-2 rounded-xl hover:shadow-lg cursor-pointer"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-20 h-20 rounded-full object-cover pointer-events-none select-none"
      />
      <Tooltip title={category.name}>
        <h2
          className="text-ellipsis overflow-hidden w-full text-lg text-center 
          font-bold text-indigo-500"
        >
          {category.name}
        </h2>
      </Tooltip>
    </div>
  );
};

export default memo(CategoryComponent);
