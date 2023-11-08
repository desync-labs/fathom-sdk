export declare enum TransactionType {
    OpenPosition = "OpenPosition",
    TopUpPosition = "TopUpPosition",
    TopUpPositionAndBorrow = "TopUpPositionAndBorrow",
    RepayPosition = "RepayPosition",
    Approve = "Approve",
    CreateProposal = "CreateProposal",
    ExecuteProposal = "ExecuteProposal",
    QueueProposal = "QueueProposal",
    CastVote = "CastVote",
    SwapTokenToStableCoin = "SwapTokenToStableCoin",
    SwapStableCoinToToken = "SwapStableCoinToToken",
    AddLiquidity = "AddLiquidity",
    RemoveLiquidity = "RemoveLiquidity",
    ClaimFeesRewards = "ClaimFeesRewards",
    WithdrawClaimedFees = "WithdrawClaimedFees",
    CreateLock = "CreateLock",
    HandleUnlock = "HandleUnlock",
    HandleEarlyWithdrawal = "HandleEarlyWithdrawal",
    HandleClaimRewards = "HandleClaimRewards",
    HandleWithdrawAll = "HandleWithdrawAll"
}
export declare enum TransactionStatus {
    None = 0,
    Success = 1,
    Error = 2
}
export interface ITransaction {
    hash: string;
    type: TransactionType;
    active: boolean;
    status: TransactionStatus;
    title: string;
    message: string;
    tokenName?: string;
}
//# sourceMappingURL=ITransaction.d.ts.map