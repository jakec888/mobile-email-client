// eslint-disable
// this is an auto generated file. This will be overwritten

export const getEmail = `query GetEmail($id: ID!) {
  getEmail(id: $id) {
    id
    subject
    folder
    sent_from
    sent_to
    date
    plain
    html
  }
}
`;
export const listEmails = `query ListEmails(
  $filter: ModelEmailFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      subject
      folder
      sent_from
      sent_to
      date
      plain
      html
    }
    nextToken
  }
}
`;
