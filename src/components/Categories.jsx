import { useEffect, useState } from "react";

const Categories = ({categories}) => {
    return (
        <div className="flex flex-col gap-4 mt-10 w-full p-4 lg:grid lg:grid-cols-2">
            {
                categories !== null && categories.map(category => (
                    <div className="flex flex-col bg-container-box px-4 py-6 rounded-2xl">
                        <div className="flex justify-between items-center">
                            <h1 className="text-gold font-bold">{category.category.name}</h1>
                            <h1 className="text-gold font-bold border-2 border-gold py-2 px-3 rounded-4xl">{category.score}</h1>
                        </div>
                        <p className="text-text text-sm mt-4">{category.overview.description}</p>
                        <h1 className="text-gold font-thin mt-6">Lời khuyên cho hôm nay:</h1>
                        <div className="ml-6 flex flex-col gap-2 mt-2">
                            {
                                category.advice.map(advice => (
                                    <p className="text-text text-sm font-thin">{advice.description}</p>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Categories;