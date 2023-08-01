<?php declare(strict_types=1);

/*
 * This file is part of the ONGR package.
 *
 * (c) NFQ Technologies UAB <info@nfq.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace OpenSearchDSL\Query\FullText;

use OpenSearchDSL\BuilderInterface;
use OpenSearchDSL\ParametersTrait;

/**
 * Represents Elasticsearch "multi_match" query.
 *
 * @see https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-multi-match-query.html
 *
 * Allows `$fields` to be an empty array to represent 'no fields'. From the Elasticsearch documentation:
 *
 * If no fields are provided, the multi_match query defaults to the `index.query.default_field` index settings,
 * which in turn defaults to `*`. `*` extracts all fields in the mapping that are eligible to term queries and filters
 * the metadata fields. All extracted fields are then combined to build a query.
 */
class MultiMatchQuery implements BuilderInterface
{
    use ParametersTrait;

    private array $fields = [];

    private string $query;

    public function __construct(array $fields, string $query, array $parameters = [])
    {
        $this->fields = $fields;
        $this->query = $query;
        $this->setParameters($parameters);
    }

    public function toArray(): array
    {
        $query = [
            'query' => $this->query,
        ];
        if (count($this->fields)) {
            $query['fields'] = $this->fields;
        }

        $output = $this->processArray($query);

        return [$this->getType() => $output];
    }

    public function getType(): string
    {
        return 'multi_match';
    }
}