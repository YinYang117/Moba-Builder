// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table users {
  id integer [primary key]
  username varchar
  email varchar
  hashed_password string.binary
  created_at timestamp
  updated_at timestamp
}

Table heroes {
  id integer [primary key]
  owner_id integer 
  name varchar
  resource_name enum
  resource_amount integer
  hit_points integer
  physical_armor integer
  magical_resistance integer
  move_speed float
  created_at timestamp
  updated_at timestamp
}

Table weapon_sets {
  id integer [primary key]
  hero_id integer
  name varchar
  main_hand_weapon_id integer
  off_hand_weapon_id integer
  created_at timestamp
  updated_at timestamp
}

Table weapons {
  id integer [primary key]
  name varchar
  damage float
  created_at timestamp
  updated_at timestamp
}

Table images {
  id integer [primary key]
  imageable_id integer
  imageable_type enum
  created_at timestamp
  updated_at timestamp
}

Table abilities {
  id integer [primary key]
  name varchar
  details varchar
  resource_name enum
  resource_cost integer
  uses_charges bool
  charges_amount integer
  uses_cooldowns bool
  cooldown_time integer
  is_channeled bool
  channel_time integer
  is_ultimate bool
}

Table hero_abilities {
  id integer [primary key]
  hero_id integer
  ability_id integer
}

Ref: "heroes"."id" < "weapon_sets"."hero_id"

Ref: "weapon_sets"."main_hand_weapon_id" < "weapons"."id"

Ref: "weapon_sets"."off_hand_weapon_id" < "weapons"."id"

Ref: "heroes"."id" < "images"."imageable_id"

Ref: "users"."id" < "heroes"."owner_id"

Ref: "heroes"."id" < "hero_abilities"."hero_id"

Ref: "abilities"."id" < "hero_abilities"."ability_id"

Ref: "abilities"."id" < "images"."imageable_id"