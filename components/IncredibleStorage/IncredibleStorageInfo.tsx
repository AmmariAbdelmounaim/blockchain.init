"use client";

interface IncredibleStorageInfoProps {
    awesomeUInt: bigint | undefined
}

export function IncredibleStorageInfo({ awesomeUInt }: IncredibleStorageInfoProps) {
    return (
        <div>
            <p>Value: {awesomeUInt?.toString()}</p>
        </div>
    )
}
