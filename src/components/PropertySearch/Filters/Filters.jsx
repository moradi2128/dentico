import Input from "../../Input/Input"

export const Filters = () => {
    return <div className="max-w-5xl mx-auto my-5 flex gap-5 border-solid border-slate-400 p-5 rounded-md">
        <div className="flex-1">
            <div>
                <label className="cursor-pointer">
                    <input type="checkbox" />
                    <span className="pl-2">has parking</span>
                </label>
            </div>
            <div>
                <label className="cursor-pointer">
                    <input type="checkbox" />
                    <span className="pl-2">pet friendly</span>
                </label>
            </div>
            <div className="flex-1">
                <span>Min price</span>
                <Input type="number" />
            </div>
            <div className="flex-1">
                <span>Max price</span>
                <Input type="number" />
            </div>
        </div>
    </div>
}