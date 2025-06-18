WITH
  brand_ids AS (
    SELECT
      id,
      name
    FROM
      brands
    WHERE
      name IN ('Hoka', 'Nike')
  )
INSERT INTO
  shoes (brand_id, model, version, release_date)
VALUES
  (
    (
      SELECT
        id
      FROM
        brand_ids
      WHERE
        name = 'Hoka'
    ),
    'Mach X',
    NULL,
    NULL
  ),
  (
    (
      SELECT
        id
      FROM
        brand_ids
      WHERE
        name = 'Nike'
    ),
    'AlphaFly Next %',
    NULL,
    NULL
  ),
  (
    (
      SELECT
        id
      FROM
        brand_ids
      WHERE
        name = 'Hoka'
    ),
    'Mach 6',
    NULL,
    NULL
  ),
  (
    (
      SELECT
        id
      FROM
        brand_ids
      WHERE
        name = 'Hoka'
    ),
    'Speedgoat 6',
    NULL,
    NULL
  ) ON CONFLICT (brand_id, model, version) DO NOTHING;