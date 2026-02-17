import { Star } from "lucide-react";



interface GoogleReviewBadgeProps {
    rating: number;
    totalReviews: number;
    className?: string;
}

export function GoogleReviewBadge({ rating, totalReviews, className = "" }: GoogleReviewBadgeProps) {
    return (
        <div className={`flex flex-col items-center gap-2 ${className}`}>
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(rating) ? "text-[#FFB400] fill-[#FFB400]" : "text-gray-300 fill-gray-300"}`}
                    />
                ))}
            </div>
            <p className="text-white/80 text-sm font-medium">
                <span className="font-bold text-white">{rating}</span> av 5 på <span className="font-bold text-white">Google</span> ({totalReviews} omdömen)
            </p>
        </div>
    );
}
