import CardSlot from "../CardSlot";

export default function Foundations() {
    return <div className="flex flex-row gap-1">
        <CardSlot type="spades" />
        <CardSlot type="hearts" />
        <CardSlot type="diamonds" />
        <CardSlot type="clubs" />
    </div>
}