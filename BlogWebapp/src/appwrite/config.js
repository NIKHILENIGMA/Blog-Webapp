import conf from "../components/conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, image, status, userID }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionID,
        slug,
        {
          title,
          content,
          image,
          status,
          userID,
        }
      );
    } catch (error) {
      console.log(`Appwrite service error :: config :: createPost :: ${error}`);
    }
  }

  async updatePost(slug, { title, content, image, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionID,
        slug,
        {
          title,
          content,
          image,
          status,
        }
      );
    } catch (error) {
      console.log(`Appwrite service error :: config :: updatePost :: ${error}`);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionID,
        slug
      );
      return true;
    } catch (error) {
      console.log(`Appwrite service error :: config :: deletePost :: ${error}`);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionID,
        slug
      );
    } catch (error) {
      console.log(`Appwrite service error :: config :: getPost :: ${error}`);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionID,
        queries
      );
    } catch (error) {
      console.log(`Appwrite service error :: config :: getPosts :: ${error}`);
      return false;
    }
  }

  // #   File storage
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      console.log(`Appwrite service error :: config :: uploadFile :: ${error}`);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      )
    } catch (error) {
      console.log(`Appwrite service error :: config :: deleteFile :: ${error}`);
      return false;
    }
  }
  async getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
      );
    } catch (error) {
      console.log(`Appwrite service error :: config :: getFilePreview :: ${error}`);
      return false;
    }
  }
}

const service = new Service();

export default service;