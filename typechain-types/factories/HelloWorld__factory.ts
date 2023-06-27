/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { HelloWorld, HelloWorldInterface } from "../HelloWorld";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "hello",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061021c806100606000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806319ff1d211461003b5780638da5cb5b14610059575b600080fd5b610043610077565b6040516100509190610168565b60405180910390f35b6100616100b4565b60405161006e91906101cb565b60405180910390f35b60606040518060400160405280600d81526020017f48656c6c6f2c20576f726c642100000000000000000000000000000000000000815250905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081519050919050565b600082825260208201905092915050565b60005b838110156101125780820151818401526020810190506100f7565b60008484015250505050565b6000601f19601f8301169050919050565b600061013a826100d8565b61014481856100e3565b93506101548185602086016100f4565b61015d8161011e565b840191505092915050565b60006020820190508181036000830152610182818461012f565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101b58261018a565b9050919050565b6101c5816101aa565b82525050565b60006020820190506101e060008301846101bc565b9291505056fea26469706673582212207d0c9681590a2c0500b89eb83c8d88ccf86f5581e5b484d6df315a028061d95564736f6c63430008120033";

type HelloWorldConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HelloWorldConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HelloWorld__factory extends ContractFactory {
  constructor(...args: HelloWorldConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      HelloWorld & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): HelloWorld__factory {
    return super.connect(runner) as HelloWorld__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelloWorldInterface {
    return new Interface(_abi) as HelloWorldInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): HelloWorld {
    return new Contract(address, _abi, runner) as unknown as HelloWorld;
  }
}