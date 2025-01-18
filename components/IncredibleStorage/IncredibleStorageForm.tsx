import { useAccount, useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { IncredibleStorageConfig } from './IncredibleStorageConfig'
import { useEffect } from 'react'

interface IncredibleStorageFormProps {
    refetchInfo: any
}

export function IncredibleStorageForm(props: IncredibleStorageFormProps) {
    const { isConnected } = useAccount()
    const { data: hash, isPending, writeContract } = useWriteContract()
    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        })

    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const awesomeUInt = formData.get('_awesomeUInt') as string

        writeContract({
            address: IncredibleStorageConfig.address,
            abi: IncredibleStorageConfig.abi,
            functionName: 'set',
            args: [BigInt(awesomeUInt)],
        })
    }

    useEffect(() => {
        props.refetchInfo()
    }, [isConfirmed])

    return (
        <>
            {isConnected && (
                <form onSubmit={submit}>
                    <input name="_awesomeUInt" placeholder="76" type="number" required />
                    <button
                        disabled={isPending}
                        type="submit"
                    >
                        Update IncredibleStorage
                        {isPending ? ' Confirming...' : ''}
                    </button>
                    {hash && <div>Transaction Hash: {hash}</div>}
                    {isConfirming && <div>Waiting for confirmation...</div>}
                    {isConfirmed && <div>Transaction confirmed.</div>}
                </form>
            )}
        </>
    )
}
