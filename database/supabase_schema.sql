create table if not exists public.product_categories (
  id text primary key,
  name text not null,
  description text,
  sort_order integer default 0
);

create table if not exists public.products (
  id text primary key,
  category_id text references public.product_categories(id),
  name text not null,
  brand text default 'EcoFlow',
  family text,
  subtitle text,
  description text,
  plain_description text,
  public_price numeric,
  distributor_price numeric,
  tax_note text,
  sale_status text,
  capacity text,
  power text,
  expansion text,
  tags text[] default '{}',
  image_url text,
  source_url text,
  specs jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
