//
//  ListItem.h
//  Notes
//
//  Created by Smith Tanner on 2/11/12.
//  Copyright (c) 2012 TS Software. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CoreData/CoreData.h>

@class ListItem;

@interface ListItem : NSManagedObject

@property (nonatomic, retain) NSString * content;
@property (nonatomic, retain) NSOrderedSet *children;
@property (nonatomic, retain) ListItem *parent;
@end

@interface ListItem (CoreDataGeneratedAccessors)

- (void)insertObject:(ListItem *)value inChildrenAtIndex:(NSUInteger)idx;
- (void)removeObjectFromChildrenAtIndex:(NSUInteger)idx;
- (void)insertChildren:(NSArray *)value atIndexes:(NSIndexSet *)indexes;
- (void)removeChildrenAtIndexes:(NSIndexSet *)indexes;
- (void)replaceObjectInChildrenAtIndex:(NSUInteger)idx withObject:(ListItem *)value;
- (void)replaceChildrenAtIndexes:(NSIndexSet *)indexes withChildren:(NSArray *)values;
- (void)addChildrenObject:(ListItem *)value;
- (void)removeChildrenObject:(ListItem *)value;
- (void)addChildren:(NSOrderedSet *)values;
- (void)removeChildren:(NSOrderedSet *)values;
@end
