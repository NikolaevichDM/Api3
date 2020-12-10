// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ExampleEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExampleEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExampleEntity", id.toString(), this);
  }

  static load(id: string): ExampleEntity | null {
    return store.get("ExampleEntity", id) as ExampleEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get spender(): Bytes {
    let value = this.get("spender");
    return value.toBytes();
  }

  set spender(value: Bytes) {
    this.set("spender", Value.fromBytes(value));
  }
}

export class ExampleEntity2 extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ExampleEntity2 entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExampleEntity2 entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExampleEntity2", id.toString(), this);
  }

  static load(id: string): ExampleEntity2 | null {
    return store.get("ExampleEntity2", id) as ExampleEntity2 | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get burnerAddress(): Bytes {
    let value = this.get("burnerAddress");
    return value.toBytes();
  }

  set burnerAddress(value: Bytes) {
    this.set("burnerAddress", Value.fromBytes(value));
  }

  get burnerStatus(): boolean {
    let value = this.get("burnerStatus");
    return value.toBoolean();
  }

  set burnerStatus(value: boolean) {
    this.set("burnerStatus", Value.fromBoolean(value));
  }
}

export class Minter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Minter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Minter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Minter", id.toString(), this);
  }

  static load(id: string): Minter | null {
    return store.get("Minter", id) as Minter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get minterAddress(): Bytes {
    let value = this.get("minterAddress");
    return value.toBytes();
  }

  set minterAddress(value: Bytes) {
    this.set("minterAddress", Value.fromBytes(value));
  }

  get minterStatus(): boolean {
    let value = this.get("minterStatus");
    return value.toBoolean();
  }

  set minterStatus(value: boolean) {
    this.set("minterStatus", Value.fromBoolean(value));
  }
}