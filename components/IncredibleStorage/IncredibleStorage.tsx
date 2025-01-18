import { useAccount, useReadContract } from "wagmi";
import { IncredibleStorageForm } from "./IncredibleStorageForm";
import { IncredibleStorageConfig } from "./IncredibleStorageConfig";
import { IncredibleStorageInfo } from "./IncredibleStorageInfo";

export function IncredibleStorage() {
  const { isConnected } = useAccount();

  const { data: awesomeUInt, refetch: refetchInfo } = useReadContract({
    address: IncredibleStorageConfig.address,
    abi: IncredibleStorageConfig.abi,
    functionName: "get",
    args: [],
  });

  return (
    <>
      {isConnected && (
        <div>
          <IncredibleStorageForm refetchInfo={refetchInfo} />
          <IncredibleStorageInfo awesomeUInt={awesomeUInt} />
        </div>
      )}
    </>
  );
}
