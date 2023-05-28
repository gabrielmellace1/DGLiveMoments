import { BigInt } from "@graphprotocol/graph-ts"
import {
  MintedNFT,
  BurnedNFT
} from "../generated/DGLiveMoments/DGLiveMoments"
import { MintedNFT as MintedNFTEntity, BurnedNFT as BurnedNFTEntity } from "../generated/schema"

export function handleMintedNFT(event: MintedNFT): void {
  let entity = new MintedNFTEntity(event.transaction.hash.toHex())
  entity.creator = event.params.creator 
  entity.tokenId = event.params.tokenId
  entity.uri = event.params.uri
  entity.timestamp = event.params.timestamp
  entity.save()
}

export function handleBurnedNFT(event: BurnedNFT): void {
  let entity = new BurnedNFTEntity(event.transaction.hash.toHex())
  entity.tokenId = event.params.tokenId
  entity.sender = event.params.sender
  entity.save()
}

