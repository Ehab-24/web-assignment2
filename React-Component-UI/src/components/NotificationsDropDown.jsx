import React, { useState } from "react";
import { LucideBell } from "lucide-react";

export default function NotificationsDropDown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                className="text-white grid place-items-center rounded"
                onClick={() => setIsOpen(true)}
            >
                <LucideBell className="w-5 h-5" />
            </button>

            {isOpen && (
                <div className="absolute bottom-12 flex items-center justify-center rounded-lg bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-2xl shadow-black/20">
                        <p className="mb-4">This is a dialog.</p>
                        <button
                            className="bg-red-500 text-white rounded"
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
