-- Create brands table
CREATE TABLE
  IF NOT EXISTS brands (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
    name TEXT NOT NULL UNIQUE,
    country TEXT,
    founded_year INT,
    description TEXT,
    website TEXT,
    is_popular BOOLEAN DEFAULT true
  );

-- Insert popular running shoe brands
INSERT INTO
  brands (name, country, founded_year, description, website)
VALUES
  (
    'Nike',
    'USA',
    1964,
    'Global giant known for innovation and aggressive marketing. Popular models include Pegasus and Vaporfly.',
    'https://www.nike.com'
  ),
  (
    'Adidas',
    'Germany',
    1949,
    'Renowned for Boost foam and sleek design. Offers both road and performance shoes.',
    'https://www.adidas.com'
  ),
  (
    'ASICS',
    'Japan',
    1949,
    'Trusted for stability and structure. Popular with marathoners and pronators.',
    'https://www.asics.com'
  ),
  (
    'Hoka',
    'France',
    2009,
    'Known for maximal cushioning and light weight. Great for long distances and recovery runs.',
    'https://www.hoka.com'
  ),
  (
    'Brooks',
    'USA',
    1914,
    'Specialist running brand with strong biomechanics focus. Ghost and Glycerin are top picks.',
    'https://www.brooksrunning.com'
  ),
  (
    'New Balance',
    'USA',
    1906,
    'Blends performance with lifestyle. Offers wide sizes and quality construction.',
    'https://www.newbalance.com'
  ),
  (
    'Saucony',
    'USA',
    1898,
    'Underrated tech-forward brand loved by serious runners. Endorphin line is well-received.',
    'https://www.saucony.com'
  ),
  (
    'On',
    'Switzerland',
    2010,
    'Famous for CloudTec cushioning. Popular for its style-forward look and innovation.',
    'https://www.on-running.com'
  ),
  (
    'Altra',
    'USA',
    2009,
    'Zero-drop, foot-shaped shoes. A favorite for natural runners and trail lovers.',
    'https://www.altrarunning.com'
  ),
  (
    'Mizuno',
    'Japan',
    1906,
    'Reliable and durable with wave technology. Popular in Asia and among serious road runners.',
    'https://www.mizunousa.com'
  ),
  (
    'Topo Athletic',
    'USA',
    2013,
    'Blends natural toe boxes with modern foam. Light and responsive.',
    'https://www.topoathletic.com'
  ),
  (
    'Puma',
    'Germany',
    1948,
    'Reviving its performance lines with Nitro foam. Stylish and competitive pricing.',
    'https://www.puma.com'
  ),
  (
    'Reebok',
    'USA',
    1958,
    'Now focused on training and heritage; limited running shoe presence.',
    'https://www.reebok.com'
  );