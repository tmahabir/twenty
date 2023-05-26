import * as TypeGraphQL from '@nestjs/graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.InputType('UserCreateManyInput', {
  isAbstract: true,
})
export class UserCreateManyInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  deletedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  lastSeen?: Date | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  disabled?: boolean | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  displayName!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  avatarUrl?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  locale!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  phoneNumber?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  passwordHash?: string | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  emailVerified?: boolean | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, {
    nullable: true,
  })
  metadata?: Prisma.InputJsonValue | undefined;
}